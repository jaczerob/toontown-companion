'use client'

import Profile from "@/components/app/profile";
import Tasks from "@/components/app/tasks";
import Suits from "@/components/app/suits";
import {useEffect, useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {GetToonInformation} from "@/lib/toontown/info";

export default function Home() {
    const [toon, setToon] = useState({});

    useEffect(() => {
        function _() {
            GetToonInformation()
                .then(json => setToon(json))
                .catch(err => console.error(err));
        }
        _();
        const interval = setInterval(() => _(), 5000);

        return () => clearInterval(interval);
    }, []);

    if (toon === {} || toon.toon === undefined) {
        return (
            <Card className={`justify-center text-center bg-white w-96 mx-auto rounded-lg shadow-2xl mb-4`}>
                <CardHeader>
                    <CardTitle>
                        TRYING TO CONNECT...
                    </CardTitle>
                </CardHeader>
                <CardContent className={`mx-auto grid grid-cols-1`}>
                    <span
                        className={`text-md`}>Please open Toontown Rewritten and connect to our companion to continue!</span>
                </CardContent>
            </Card>
        );
    }

    return (
        <div>
            <Profile
                dna={toon.toon.style}
                name={toon.toon.name}
                currentLaff={toon.laff.current}
                maxLaff={toon.laff.max}
                className={`text-center justify-center border-black border-2 mb-2 w-64 mx-auto rounded-lg bg-white`}
            />
            <Tasks
                tasks={toon.tasks}
                className={`flex justify-center mx-auto`}
            />
            <Suits
                suits={[toon.cogsuits.s, toon.cogsuits.m, toon.cogsuits.l, toon.cogsuits.c]}
                className={`p-2 mb-2`}
            />
        </div>
    );
}
