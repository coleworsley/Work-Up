const userInputs = [
  {
    user_id: 10,
    exercise_id: 14
  },
]

const createWorkout = (knex, workout) => {
  return knex('user_exercises').insert({
    user_id: workout.user_id,
    exercise_id: workout.exercise_id
  })
};


exports.seed = (knex, Promise) => {
  return knex('user_exercises').del()
    .then(() => {
      let promises = [];

      userInputs.forEach(workout => {
        promises.push(createWorkout(knex, workout));
      });

      return Promise.all(promises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};


// let papersData = [{
//   author: 'Brittany',
//   title: 'Lorem Ipsum',
//   footnotes: ['one', 'two', 'three']
// },
// {
//   author: 'Robbie',
//   title: 'Dolor Set Amet',
//   footnotes: ['four', 'five', 'six']
// }]
//
//
//
//
// const createWorkout = (knex, paper) => {
//   return knex('papers').select({
//     title: paper.title,
//     author: paper.author
//   }, 'id')
//   .then(paperId => {
//     let footnotePromises = [];
//
//     paper.footnotes.forEach(footnote => {
//       footnotePromises.push(
//         createFootnote(knex, {
//           note: footnote,
//           paper_id: paperId[0]
//         })
//       )
//     });
//
//     return Promise.all(footnotePromises);
//   })
// };
//
// const createFootnote = (knex, footnote) => {
//   return knex('footnotes').insert(footnote);
// };
//
// exports.seed = (knex, Promise) => {
//   return knex('footnotes').del() // delete footnotes first
//     .then(() => knex('papers').del()) // delete all papers
//     .then(() => {
//       let paperPromises = [];
//
//       papersData.forEach(paper => {
//         paperPromises.push(createPaper(knex, paper));
//       });
//
//       return Promise.all(paperPromises);
//     })
//     .catch(error => console.log(`Error seeding data: ${error}`));
// };
