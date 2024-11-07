function RowSkill(props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-3">{props.Skill}</div>
          <div className="col-span-12 md:col-span-3">{props.Persentase}</div>

          </div>
        </div>
      </div>
    );
  }

  export default function Skill() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Skill</h2>

        <RowSkill Skill="Html" Persentase="70%"/>
        <RowSkill Skill="PHP" Persentase="50%" />
        <RowSkill Skill="CSS" Persentase="40%" />
        <RowSkill Skill="JavaScript" Persentase="40%"/>







      </div>
    )
  }