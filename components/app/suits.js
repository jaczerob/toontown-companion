import {Card, CardContent, CardTitle} from "@/components/ui/card";
import Image from "next/image";

export default function Suits({className, suits}) {
    return (
        <div className={className}>
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-2`}>
                {suits.map((suit, i) => {
                    if (!suit.hasDisguise) {
                        return (
                            <div key={i}/>
                        )
                    }

                    return (
                        <Suit
                            key={i}
                            className={`shadow-lg rounded-lg border-black border-2`}
                            department={suit.department}
                            suitLevel={suit.level}
                            suitName={suit.suit.name}
                            suitVersion={suit.version}
                            promotionCurrent={suit.promotion.current}
                            promotionTarget={suit.promotion.target}
                        />
                    );
                })}
            </div>
        </div>
    )
}

function Suit({className, department, suitLevel, suitName, suitVersion, promotionCurrent, promotionTarget}) {
    let promotion = ''
    if (suitLevel === 50) {
        promotion = 'Maxed'
    } else if (promotionCurrent === promotionTarget) {
        promotion = `Ready for promotion`
    } else {
        promotion = `${promotionCurrent}/${promotionTarget}`
    }

    let cog = suitName.toLowerCase().replace(/[ -]/i, '_')
    let cogUrl = `https://toonhq.org/static/assets/cogs/${cog}.png`

    console.log(cog)
    console.log(cogUrl)
    let color = '';
    switch (department.toLowerCase()) {
        case "sellbot":
            color = "#736c6a"
            break
        case "lawbot":
            color = "#788189"
            break
        case "bossbot":
            color = "#9b8a8d"
            break
        case "cashbot":
            color = "#6a7f75"
            break
        default:
            color = "#000000"
            break
    }

    return (
        <Card className={className} style={{backgroundColor: color}}>
            <CardTitle className={`text-center mb-2 mt-2`}>{department}</CardTitle>
            <CardContent className={`grid grid-cols-1 text-center`}>
                <CardTitle className={`relative w-32 h-32 mx-auto mb-2`}>
                    <Image
                        src={cogUrl}
                        alt={`Cog Picture`}
                        fill
                        className={`rounded-full object-cover bg-white border-black border-2`}
                    />
                </CardTitle>
                <span>Lv. {suitLevel} {suitVersion === 2 ? 'v2.0' : ''}</span>
                <span>Promotion: {promotion}</span>
            </CardContent>
        </Card>
    );
}