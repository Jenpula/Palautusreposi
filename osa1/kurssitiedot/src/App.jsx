const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = ({ course }) => {
    return <h1>{course.name}</h1>;
  };

  const Content = ({  content }) => {
    return <h1>
    {part1}
    {part2}
    {part3}
    </h1>;
  };

  const Total = ({ total }) => {
    return <h1>
      {exercises1}
      {exercises2}
      {exercises3}</h1>;
  };
  
    return (
      <div>
        <Header course={course} />
        <Content  />
        <Total />
      </div>
    )
  }

export default App
