import React, {Component} from 'react';

import Table from '../components/TablePlayground/Table';
import Form from '../components/TablePlayground/Form';

class TablePlayground extends Component{
    
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState(
            {
                characters: [...this.state.characters, character]
            }
        );
    }

    render() {
        const { characters } = this.state;
        
        return(
            <div className="container">
                <Table 
                    characterData={characters}
                    removeCharacter={this.removeCharacter} 
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default TablePlayground;