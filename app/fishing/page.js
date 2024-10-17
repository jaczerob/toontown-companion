"use client"

import {useEffect, useState} from "react";
import {GetToonInformation} from "@/lib/toontown/info";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"

const ROD_WEIGHTS = {
    "Twig Rod": 0,
    "Bamboo Rod": 1,
    "Hardwood Rod": 2,
    "Steel Rod": 3,
    "Gold Rod": 4,
}

const FISH_MAP = {
    "Balloon Fish": {
        "rarity": "Very Common (1)",
        "rod": "Twig Rod",
        "location": "Any pond"
    },
    "Star Fish": {
        "rarity": "Very Common (1)",
        "rod": "Twig Rod",
        "location": "Any pond"
    },
    "Pool Shark": {
        "rarity": "Very Common (3)",
        "rod": "Hardwood Rod",
        "location": "Any pond"
    },
    "Clown Fish": {
        "rarity": "Very Common (1)",
        "rod": "Twig Rod",
        "location": "Toontown Central"
    },
    "Party Clown Fish": {
        "rarity": "Very Common (2)",
        "rod": "Twig Rod",
        "location": "Toontown Central"
    },
    "Peanut Butter & Jellyfish": {
        "rarity": "Very Common (2)",
        "rod": "Twig Rod",
        "location": "Toontown Central"
    },
    "Hot Air Balloon Fish": {
        "rarity": "Common (4)",
        "rod": "Twig Rod",
        "location": "Toontown Central"
    },
    "Sad Clown Fish": {
        "rarity": "Common (4)",
        "rod": "Twig Rod",
        "location": "Toontown Central"
    },
    "Circus Clown Fish": {
        "rarity": "Rare (6)",
        "rod": "Twig Rod",
        "location": "Toontown Central"
    },
    "All Star Fish": {
        "rarity": "Ultra Rare (10)",
        "rod": "Twig Rod",
        "location": "Toontown Central, Donald's Dock, Estates"
    },
    "Weather Balloon Fish": {
        "rarity": "Common (5)",
        "rod": "Twig Rod",
        "location": "Punchline Place"
    },
    "Water Balloon Fish": {
        "rarity": "Very Common (3)",
        "rod": "Twig Rod",
        "location": "Silly Street"
    },
    "Red Balloon Fish": {
        "rarity": "Very Common (2)",
        "rod": "Twig Rod",
        "location": "Loopy Lane"
    },
    "Dog Fish": {
        "rarity": "Very Common (1)",
        "rod": "Bamboo Rod",
        "location": "Donald's Dock"
    },
    "Bull Dog Fish": {
        "rarity": "Rare (6)",
        "rod": "Gold Rod",
        "location": "Donald's Dock"
    },
    "Hot Dog Fish": {
        "rarity": "Common (5)",
        "rod": "Twig Rod",
        "location": "Donald's Dock"
    },
    "Dalmatian Dog Fish": {
        "rarity": "Common (4)",
        "rod": "Twig Rod",
        "location": "Donald's Dock"
    },
    "Puppy Dog Fish": {
        "rarity": "Very Common (2)",
        "rod": "Twig Rod",
        "location": "Donald's Dock"
    },
    "King Crab": {
        "rarity": "Very Common (3)",
        "rod": "Twig Rod",
        "location": "Donald's Dock"
    },
    "Cutthroat Trout": {
        "rarity": "Very Common (2)",
        "rod": "Twig Rod",
        "location": "Donald's Dock"
    },
    "Captain Cutthroat Trout": {
        "rarity": "Rare (6)",
        "rod": "Twig Rod",
        "location": "Barnacle Boulevard"
    },
    "Scurvy Cutthroat Trout": {
        "rarity": "Rare (7)",
        "rod": "Twig Rod",
        "location": "Seaweed Street"
    },
    "Old King Crab": {
        "rarity": "Very Rare (8)",
        "rod": "Twig Rod",
        "location": "Lighthouse Lane"
    },
    "Crunchy PB&J Fish": {
        "rarity": "Common (4)",
        "rod": "Twig Rod",
        "location": "Daisy Gardens"
    },
    "Cat Fish": {
        "rarity": "Very Common (1)",
        "rod": "Twig Rod",
        "location": "Daisy Gardens"
    },
    "Tabby Cat Fish": {
        "rarity": "Very Common (3)",
        "rod": "Twig Rod",
        "location": "Daisy Gardens"
    },
    "Amore Eel": {
        "rarity": "Very Common (1)",
        "rod": "Twig Rod",
        "location": "Daisy Gardens"
    },
    "Electric Amore Eel": {
        "rarity": "Very Common (3)",
        "rod": "Twig Rod",
        "location": "Daisy Gardens"
    },
    "Kiddie Pool Shark": {
        "rarity": "Common (5)",
        "rod": "Bamboo Rod",
        "location": "Daisy Gardens"
    },
    "Swimming Pool Shark": {
        "rarity": "Rare (6)",
        "rod": "Bamboo Rod",
        "location": "Daisy Gardens"
    },
    "Olympic Pool Shark": {
        "rarity": "Rare (7)",
        "rod": "Bamboo Rod",
        "location": "Daisy Gardens"
    },
    "Siamese Cat Fish": {
        "rarity": "Extremely Rare (9)",
        "rod": "Twig Rod",
        "location": "Elm Street"
    },
    "Five Star Fish": {
        "rarity": "Very Common (2)",
        "rod": "Twig Rod",
        "location": "Minnie's Melodyland"
    },
    "Rock Star Fish": {
        "rarity": "Common (5)",
        "rod": "Bamboo Rod",
        "location": "Minnie's Melodyland"
    },
    "Nurse Shark": {
        "rarity": "Common (5)",
        "rod": "Twig Rod",
        "location": "Minnie's Melodyland"
    },
    "Piano Tuna": {
        "rarity": "Common (5)",
        "rod": "Steel Rod",
        "location": "Minnie's Melodyland"
    },
    "Grand Piano Tuna": {
        "rarity": "Ultra Rare (10)",
        "rod": "Steel Rod",
        "location": "Minnie's Melodyland"
    },
    "Upright Piano Tuna": {
        "rarity": "Rare (6)",
        "rod": "Hardwood Rod",
        "location": "Minnie's Melodyland"
    },
    "Player Piano Tuna": {
        "rarity": "Rare (7)",
        "rod": "Hardwood Rod",
        "location": "Minnie's Melodyland"
    },
    "Clara Nurse Shark": {
        "rarity": "Rare (7)",
        "rod": "Twig Rod",
        "location": "Baritone Boulevard"
    },
    "Florence Nurse Shark": {
        "rarity": "Very Rare (8)",
        "rod": "Twig Rod",
        "location": "Tenor Terrace"
    },
    "Baby Grand Piano Tuna": {
        "rarity": "Extremely Rare (9)",
        "rod": "Hardwood Rod",
        "location": "Tenor Terrace"
    },
    "Grape PB&J Fish": {
        "rarity": "Very Common (3)",
        "rod": "Twig Rod",
        "location": "The Brrrgh"
    },
    "Concord Grape PB&J Fish": {
        "rarity": "Ultra Rare (10)",
        "rod": "Twig Rod",
        "location": "The Brrrgh, Donald's Dreamland"
    },
    "Frozen Fish": {
        "rarity": "Very Common (1)",
        "rod": "Bamboo Rod",
        "location": "The Brrrgh"
    },
    "Alaskan King Crab": {
        "rarity": "Rare (7)",
        "rod": "Bamboo Rod",
        "location": "The Brrrgh"
    },
    "Brown Bear Acuda": {
        "rarity": "Very Common (2)",
        "rod": "Hardwood Rod",
        "location": "The Brrrgh"
    },
    "Black Bear Acuda": {
        "rarity": "Very Common (3)",
        "rod": "Hardwood Rod",
        "location": "The Brrrgh"
    },
    "Koala Bear Acuda": {
        "rarity": "Common (4)",
        "rod": "Hardwood Rod",
        "location": "The Brrrgh"
    },
    "Honey Bear Acuda": {
        "rarity": "Common (5)",
        "rod": "Hardwood Rod",
        "location": "The Brrrgh"
    },
    "Polar Bear Acuda": {
        "rarity": "Rare (6)",
        "rod": "Hardwood Rod",
        "location": "The Brrrgh"
    },
    "Panda Bear Acuda": {
        "rarity": "Rare (7)",
        "rod": "Steel Rod",
        "location": "The Brrrgh"
    },
    "Grizzly Bear Acuda": {
        "rarity": "Ultra Rare (10)",
        "rod": "Steel Rod",
        "location": "The Brrrgh"
    },
    "Kodiac Bear Acuda": {
        "rarity": "Very Rare (8)",
        "rod": "Steel Rod",
        "location": "Sleet Street"
    },
    "Strawberry PB&J Fish": {
        "rarity": "Common (5)",
        "rod": "Twig Rod",
        "location": "Donald's Dreamland"
    },
    "Tom Cat Fish": {
        "rarity": "Very Common (2)",
        "rod": "Bamboo Rod",
        "location": "Donald's Dreamland"
    },
    "Devil Ray": {
        "rarity": "Extremely Rare (9)",
        "rod": "Twig Rod",
        "location": "Donald's Dreamland"
    },
    "Moon Fish": {
        "rarity": "Very Common (1)",
        "rod": "Twig Rod",
        "location": "Donald's Dreamland"
    },
    "Full Moon Fish": {
        "rarity": "Ultra Rare (10)",
        "rod": "Steel Rod",
        "location": "Donald's Dreamland"
    },
    "New Moon Fish": {
        "rarity": "Very Common (3)",
        "rod": "Twig Rod",
        "location": "Donald's Dreamland"
    },
    "Harvest Moon Fish": {
        "rarity": "Common (4)",
        "rod": "Hardwood Rod",
        "location": "Donald's Dreamland"
    },
    "Crescent Moon Fish": {
        "rarity": "Rare (6)",
        "rod": "Bamboo Rod",
        "location": "Lullaby Lane"
    },
    "Alley Cat Fish": {
        "rarity": "Common (4)",
        "rod": "Bamboo Rod",
        "location": "Lullaby Lane"
    },
    "Half Moon Fish": {
        "rarity": "Very Rare (8)",
        "rod": "Twig Rod",
        "location": "Lullaby Lane"
    },
    "Shining Star Fish": {
        "rarity": "Rare (7)",
        "rod": "Twig Rod",
        "location": "Estates"
    },
    "Holey Mackerel": {
        "rarity": "Extremely Rare (9)",
        "rod": "Bamboo Rod",
        "location": "Estates"
    },
    "Sea Horse": {
        "rarity": "Very Common (2)",
        "rod": "Hardwood Rod",
        "location": "Estates"
    },
    "Rocking Sea Horse": {
        "rarity": "Very Common (3)",
        "rod": "Steel Rod",
        "location": "Estates"
    },
    "Clydesdale Sea Horse": {
        "rarity": "Common (5)",
        "rod": "Steel Rod",
        "location": "Estates"
    },
    "Arabian Sea Horse": {
        "rarity": "Rare (7)",
        "rod": "Steel Rod",
        "location": "Estates"
    },
}

export default function Page() {
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

    const seenFish = new Set()
    for (const [collectionKey, collection] of Object.entries(toon.fish.collection)) {
        for (const [fishKey, fish] of Object.entries(collection.album)) {
            seenFish.add(fish.name);
        }
    }

    if (seenFish.size === 70) {
        return (
            <Card className={`justify-center text-center bg-white w-96 mx-auto rounded-lg shadow-2xl mb-4`}>
                <CardHeader>
                    <CardTitle>
                        MAXED FISHING
                    </CardTitle>
                </CardHeader>
                <CardContent className={`mx-auto grid grid-cols-1`}>
                    <span
                        className={`text-md`}>You have already maxed fishing! Nothing to see here...</span>
                </CardContent>
            </Card>
        )
    }

    const unseenFish = []
    if (seenFish.size !== 70) {
        for (const fishKey of Object.keys(FISH_MAP)) {
            if (!seenFish.has(fishKey))
                unseenFish.push(fishKey);
        }
    }

    const rod = `${toon.fish.rod.name} Rod`
    const toonRodWeight = ROD_WEIGHTS[rod]

    return (
        <div className={`mr-2 ml-2`}>
            <Card className={`justify-center text-center bg-white w-96 mx-auto rounded-lg shadow-2xl mb-4`}>
                <CardHeader>
                    <CardTitle>
                        FISHING GUIDE
                    </CardTitle>
                </CardHeader>
                <CardContent className={`mx-auto grid grid-cols-1`}>
                    <span
                        className={`text-md`}>Here you will find what fish you need to max and where to find them! All fish in green are able to be caught by your current fishing rod.</span>
                </CardContent>
            </Card>
            <Table className={`bg-white rounded-lg mx-auto mb-4 shadow-lg`}>
                <TableHeader>
                    <TableRow>
                        <TableHead className={`text-black text-center`}>Fish</TableHead>
                        <TableHead className={`text-black text-center`}>Rod</TableHead>
                        <TableHead className={`text-black text-center`}>Rarity</TableHead>
                        <TableHead className={`text-black text-center`}>Location</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {unseenFish.map((fishKey, i) => {
                        const fish = FISH_MAP[fishKey]
                        const fishRodWeight = ROD_WEIGHTS[fish.rod];
                        const rodFontColor = toonRodWeight >= fishRodWeight ? 'green-500' : 'red-500'

                        return (
                            <TableRow key={i} className={`text-${rodFontColor}`}>
                                <TableCell>{fishKey}</TableCell>
                                <TableCell>{fish.rod}</TableCell>
                                <TableCell>{fish.rarity}</TableCell>
                                <TableCell>{fish.location}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}