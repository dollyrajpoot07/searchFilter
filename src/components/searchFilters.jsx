'use client';
import React, { useEffect, useState } from 'react';
import styles from "./searchFilters.module.css";
import people from '../../public/people.json';

export default function SearchFilters() {
    const [search, setSearch] = useState('');
    const [filteredPeople, setFilteredPeople] = useState(people);

    useEffect(() => {
        const term = search.toLowerCase();
        setFilteredPeople(
            people.filter(person =>
                person.name.toLowerCase().includes(term) ||
                person.email.toLowerCase().includes(term) ||
                person.city.toLowerCase().includes(term)
            )
        )
    }, [search]);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Search Engine</h2>
            <input
                className={styles.input}
                type='text'
                value={search}
                placeholder='Search by name, email or city'
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul className={styles.list}>
                {filteredPeople.length > 0 ? (
                    filteredPeople.map(person => (
                        <li key={person.id} className={styles.card}>
                            <strong>{person.name}</strong>
                            <span>{person.email}</span>
                            <small>{person.city}</small>
                        </li>
                    ))
                ) : (
                    <p className={styles.noResult}>No matches found 😕</p>
                )}
            </ul>
        </div>
    )
}