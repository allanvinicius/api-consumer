interface RepositoryProps {
    results: {
        name: string;
        status: string;
        gender: string;
        species: string;
        image: string;
    }
}

export function RepositoryItem({results} : RepositoryProps) {
    return (
        <li>
            <h1>{results.name}</h1>
            <img src={results.image} alt="img" />
            <h2>{results.status}</h2>
            <h3>{results.gender}</h3>
            <h4>{results.species}</h4>
        </li>
    );
}