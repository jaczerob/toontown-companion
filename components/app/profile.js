import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Profile({dna, name, maxLaff, currentLaff, className}) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className={`relative w-32 h-32 mx-auto`}>
                    <Image
                        src={`https://rendition.toontownrewritten.com/render/${dna}/portrait/256x256.png`}
                        alt={`Profile picture`}
                        fill
                        className={`rounded-full object-cover border-black border-2`}
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className={`mx-auto grid grid-cols-1`}>
                <span className={`text-2xl`}>{name}</span>
                <span className={`text-md`}>{currentLaff}/{maxLaff}</span>
            </CardContent>
        </Card>
    )
}