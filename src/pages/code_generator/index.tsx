import Head from "next/head";
import { useState } from 'react';
import axios from 'axios';

export default function ORMCodeGenPage() {
    const [tableName, setTableName] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');

    const handleGenerateCode = async () => {
        try {
            const response = await axios.post('/api/generate-code', { tableName });
            setGeneratedCode(response.data.code);
        } catch (error) {
            console.error('Error generating code:', error);
        }
    };

    return (
        <div className="container">
            <h1>ORM Code Generator</h1>
            <div className="mb-3">
                <label htmlFor="tableName" className="form-label">Table Name:</label>
                <input type="text" className="form-control" id="tableName" value={tableName} onChange={(e) => setTableName(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={handleGenerateCode}>Generate Code</button>
            {generatedCode && (
                <div className="mt-3">
                    <h2>Generated Code:</h2>
                    <pre>{generatedCode}</pre>
                </div>
            )}
        </div>
    );
}
