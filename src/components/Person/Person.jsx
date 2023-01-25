import React from 'react';
import PropTypes from 'prop-types';

export function Person({ person }) {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const personSex = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      {isMarried ? (
        <p className="Person__partner">
          {`${partnerName} is my ${personSex}`}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
}

Person.defaultProps = {
  name: 'Misha',
  age: 35,
  isMarried: true,
  partnerName: 'Masha',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
