import InfoCard from "@/components/shared/infoCard"

const objectText = `
Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.

Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare.

Conducătorul auto şi pasagerii, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.
`

const riskText = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae exercitationem accusamus alias explicabo quas fuga cum, autem deserunt laborum ad ab? Corporis laudantium veritatis nesciunt quia optio aspernatur et.   
`

export const GreenCardInfo = () => {

    return (
        <div className="w-full mt-0 lg:mt-16">
            <InfoCard objectText={objectText} riskText={riskText} />
        </div>
    )
}