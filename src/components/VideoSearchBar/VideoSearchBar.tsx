import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import style from "./VideoSearchBar.module.css"

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
        <section className={`${style.searchSection}`}>
            <form onSubmit={handleSubmit} className={`${style.searchBar}`}>
                <div className={`${style.inputBox}`}>
                    <label className={`${style.searchLabel}`} > Search by name</label>
                    <input className={`${style.searchBox}`} value={searchName} onChange={(e) => setSearchName(e.target.value)} name="searchName" />
                </div>
                <div className={`${style.filter}`}>
                    <DatePickerInput label="From" classNames={{ root: style.pickerRoot, label: style.pickerLabel }} clearable value={startDate} onChange={setStartDate} />
                    <DatePickerInput label="To" classNames={{ root: style.pickerRoot, label: style.pickerLabel }} clearable value={endDate} onChange={setEndDate} />
                </div>
                <button type="submit" className={`${style.searchBtn}`} onSubmit={handleSubmit}>Submit</button>
            </form>
        </section>
    )

}