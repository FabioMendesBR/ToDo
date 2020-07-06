const TaskModel = require('../model/taskModel');
const { ispast, isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
    
    const { macaddress, type, title, description, when } = req.body;

    if(!macaddress)
        return res.status(400).json({ error: 'macadress é obrigatório'});
    else if(!type)
        return res.status(400).json({ error: 'type é obrigatório'});
    else if(!title)
        return res.status(400).json({ error: 'title é obrigatório'});
    else if(!description)
        return res.status(400).json({ error: 'description é obrigatório'});
    else if(!when)
        return res.status(400).json({ error: 'when é obrigatório'});
    else if(isPast(new Date(when)))
    return res.status(400).json({ error: 'escolha uma data futura'});
    else{
        let exists;
        //verifica se a tarefa ja existe "$ne = diferente"
        if(req.params.id){
            exists = await TaskModel.
                findOne({
                    '_id':{'$ne':req.params.id},  //ignora tarefas com mesmo id
                    'when': {'$eq': new Date(when)},
                    'macaddress': {'$in': macaddress}
            });   
        }else{
            //verifica se ha tarefa no mesmo dia e hora "$eq = igual"
            exists = await TaskModel.
                findOne({
                    'when': {'$eq': new Date(when)},
                    'macaddress': {'$in': macaddress}
                });
        }
                
        if(exists){
            return res.status(400).json({ error: 'Já existe uma tarefa neste dia e horário'});
        }                       
        next();
    }
}


module.exports = TaskValidation;