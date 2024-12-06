import InfoCard from "@/components/shared/infoCard"

const objectText = `
    Asigurarea RCA oferă protecție pentru eventualele prejudicii cauzate de asigurat terțelor persoane prin accidente de autovehicule pe teritoriul Republicii Moldova, și anume: 
    deces sau vătămări corporale;
    avarii sau distrugeri ale unor bunuri (inclusiv autovehicule).
`

const riskText = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae exercitationem accusamus alias explicabo quas fuga cum, autem deserunt laborum ad ab? Corporis laudantium veritatis nesciunt quia optio aspernatur et.   
`

export const RCACardInfo = () => {

    return (
        <div className="w-full mt-0 lg:mt-16">
            <InfoCard objectText={objectText} riskText={riskText} />
        </div>
    )
}