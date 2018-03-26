const { OwlApiBinding } = require('../../dist');

const owlApiBinding = new OwlApiBinding('http://localhost:4000');

const run = async () => {
  try {
    const result = await owlApiBinding.query.maps();

    console.log('success');
    console.log(JSON.stringify(result, null, 4));
  } catch (error) {
    console.log('failure');
    console.log(error);
  }
};

run();
