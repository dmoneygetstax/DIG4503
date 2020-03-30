import getPokemon from 'json-pokemon/getPokemon';

function response(req, res){
    for(let i=0; i < getPokemon.length; i++) {

        for(let k=0; pokemon[i].typeList.length; k++) {
            
            if (k != req) {
                return false;
            }

        }
    }

    let result = {"error": "Could not find type."};

    let pokemon = getPokemon.getPokemonByName(req.query.typeList);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);
}

export default response;