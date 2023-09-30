
class CrudRepository {
    constructor(model){
            this.model = model;
    }
    async create(data){
        console.log(this.model);
        const response = await this.model.create(data);
        return response;
    }
    async get(data){
        const response = await this.model.findOne(data);
        return response;
    }
    async getAll(){
        const response = await this.model.find();
        return response;
    }
    async getAndUpdate(id,data){
        const response = await this.model.findByIdAndUpdate({id},{data:data});
        return response;
    }
    async destroy(id){
        const response = await this.model.findByIdAndDelete({_id:id})
        return response;
    }
}

module.exports = CrudRepository;
