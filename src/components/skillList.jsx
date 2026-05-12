import SkillBadge from "./SkillBadge"

function SkillList({skills}) {

    return(
        <>
            {
                skills.map((skill,index)=>(
                    <SkillBadge
                        key={index}
                        name={skill.name}
                        level={skill.level}
                    />
                ))
            }
        </>
    )
}

export default SkillList