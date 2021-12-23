import { NewGameLogic } from "./NewGameLogic";

export const Select = () => {
    const { difficulty, setDifficulty } = NewGameLogic();
    return (
        <select 
            value = {difficulty} 
            onChange = {e => setDifficulty(e.target.value)}
            name = "difficulty"
            class="form-select">
                            <option value ="1">Easy</option>
                            <option value ="2">Medium</option>
                            <option value ="3">Hard</option>
            </select>
    );
}