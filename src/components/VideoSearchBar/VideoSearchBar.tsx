import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export interface Query {
    start_date?: string | null;
    end_date?: string | null;
    category?: string | null;
    search_name: string | null;
}

type SearchBarProps = {
    onSearch: (query: Query) => void;
}

export default function SearchBar({ onSearch } : SearchBarProps) {
    
    const [searchName, setSearchName] = useState("");
    const [startDate, setStartDate] = useState<string | null>(null);
    const [endDate, setEndDate] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null)
    
    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get("searchName")as string;
        const startDate = formData.get("startDate") as string;
        const endDate = formData.get('endDate') as string;
        onSearch({
            search_name: name,
            start_date: startDate,
            end_date: endDate,
            category: null
            }
        );
    }

    return(
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <label>
                    Search by name<input value={searchName} onChange={(e) => setSearchName(e.target.value)} name="searchName" className="searchName"/>
                </label>
                <div className='searchFilter'>
                    <label>
                        From<DatePicker className='startDate' allowDeselect value={startDate} onChange={setStartDate} />;
                        <input name="startDate" />
                    </label>
                    <label>
                        To<DatePicker className='endDate' allowDeselect value={endDate} onChange={setEndDate} />;
                        <input name='endDate' />
                    </label>
                </div>
                <button type="submit" className="searchBtn" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )

}