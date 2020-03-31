import getPokemon from 'json-pokemon/getPokemon';

function response(req, res){
    
    for(let i=0; i < getPokemon.length; i++) {

        for(let k=0; pokemon[i].typeList.length; k++) {
            

            }

        }

        let result = {"error": "Could not find type."};

        let pokemonArray = pokemon[k](req.query.type);

        if(pokemonArray !== null) {
            result = pokemonArray;
        }
        console.log(pokemon);
        res.json(result);
    }

export default response;

