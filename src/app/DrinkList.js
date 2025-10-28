function Drink({ name }) {
  let part, caffeine, age;
  if (name ==='té') {
    part = 'hoja';
    caffeine = '15 - 70 mg/taza';
    age = '4,000+ años';
  } else if (name ==='café') {
    part = 'grano';
    caffeine = '80 - 185 mg/taza';
    age = '1,000+ años';
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
        <dd>{part}</dd>
        <dt>Contenido de cafeína</dt>
        <dd>{caffeine}</dd>
        <dt>Antigüedad</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="té" />
      <Drink name="café" />
    </div>
  );
}