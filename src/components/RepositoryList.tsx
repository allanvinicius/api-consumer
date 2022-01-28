import { useEffect, useState } from "react";
import { api } from "../services/api";
import { RepositoryItem } from "./RepositoryItem";

interface CharacterProps {
    name: string;
    status: string;
    gender: string;
    species: string;
    image: string;
}

export function RepositoryList() {
    const [characters, setCharacters] = useState<CharacterProps[]>([]);

    useEffect(() => {
        api.get('/character')
            .then(response => setCharacters(response.data.results))
    }, [])

    return (
        <ul>
            {characters.map(character => (
                <RepositoryItem key={character.name} results={character} />
            ))}
        </ul>
    );
}