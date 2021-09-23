import * as React from 'react';
import useAsync from '../hooks/useAsync';

const ApiTester: React.FC = () => {

    const { loading, error, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const fetchData = async () => {
                try {
                    const response = await fetch('/api/MessageTrigger?name=test');
                    const data = await response.text();
                    resolve(data);
                } catch (error) {
                    console.log("Log$: error", error);
                    reject(error);
                }
            };
            setTimeout(() => {
                fetchData();
            }, 2000);
        });
    });

    return (<>
        <div>
            Following message is from the server:
            <div>{loading && <span>loading...</span>}</div>
            <div>{error && <span>Error: Something went wrong</span>}</div>
            <div>{value && <span>Message: {value}</span>}</div>
        </div>
    </>);
}

export default ApiTester;