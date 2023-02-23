import bodyPartImg from '../images/body-part.png';
import equipmentImg from '../images/equipment.png';
import targetImg from '../images/target.png';

const ExerciseInfomation = ({ exercise }) => {

  console.log(exercise);
  const { bodyPart, equipment, gifUrl, id, name, target } = exercise;

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', }}>
      <img src={gifUrl} alt='exercise gif demo' style={{ width: '540px', height: '540px', margin: '20px' }}/>
      <div style={{ margin: '20px'}}>
        <h1 style={{ textAlign: 'center', textTransform: 'capitalize', fontSize: '48px'}}>{ name }</h1>
        <p style={{padding: '20px', fontSize: '20px'}}>
          This is a {bodyPart} exercise, specifically targetting the {target}. 
          The only equipment you need to perform this exercise is {equipment}.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', margin: '45px 100px'}}>
          <img src={bodyPartImg} alt='Bodypart' style={{ borderRadius: '9999px', backgroundColor: 'rgba(0, 0, 0, 0.125)' }}/>
          <h3 style={{ textTransform: 'capitalize', fontSize: '24px', marginLeft: '20px'}}>{ bodyPart }</h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '45px 100px'}}>
          <img src={equipmentImg} alt='Equipment' style={{ borderRadius: '9999px', backgroundColor: 'rgba(0, 0, 0, 0.125)' }}/>
          <h3 style={{ textTransform: 'capitalize', fontSize: '24px', marginLeft: '20px'}}>{ equipment }</h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '45px 100px'}}>
          <img src={targetImg} alt='Target muscle' style={{ borderRadius: '9999px', backgroundColor: 'rgba(0, 0, 0, 0.125)' }}/>
          <h3 style={{ textTransform: 'capitalize', fontSize: '24px', marginLeft: '20px'}}>{ target }</h3>
        </div>
      </div>
    </div>
  )
}

export default ExerciseInfomation;