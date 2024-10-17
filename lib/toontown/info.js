import {v4 as uuidv4} from 'uuid';

const authUUID = uuidv4();

export async function GetToonInformation() {
    console.log(authUUID);

    const response = await fetch('http://localhost:1547/all.json', {
        headers: {
            'Host': 'localhost:1547',
            'Authorization': authUUID,
            'X-Requested-With': 'Toontown Companion'
        }
    })

    if (!response.ok) {
        return {}
    }

    return await response.json()
}