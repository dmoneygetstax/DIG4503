import getPokemon from 'json-pokemon/getPokemon';

function response(req, res){

    let result = {"error": "Could not find!"};
    
    for(let i=0; i < getPokemon.length; i++) {

        for(let k=0; pokemon[i].typeList.length; k++) {
            
            if(pokemon[k] == req.params.type) {
                result = pokemon[k];
            }

            }

        }

        res.json(result);
    }

export default response;