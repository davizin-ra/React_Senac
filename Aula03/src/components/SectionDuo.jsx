import Style from './styles/SectionDuo.module.css'

export default function SectionDuo ({bg}) {
    return(
        <section className={Style.section} style={{backgroundColor: bg}}>
            <div></div>
            <div></div>
        </section>
    )
}