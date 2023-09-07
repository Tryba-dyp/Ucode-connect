
document.addEventListener('DOMContentLoaded', function() {
  const titles = document.querySelectorAll('#titles li');
  const filmTitle = document.getElementById('film-title');
  const filmPoster = document.getElementById('film-poster');
  const productionDate = document.getElementById('production-date');
  const filmInformation = document.getElementById('film-information');
  const mainActors = document.getElementById('main-actors');
  const filmInfoContainer = document.getElementById('film-info');

  titles.forEach(function(title) {
    title.addEventListener('click', function() {
      const filmId = title.getAttribute('data-id');
      const filmData = getFilmData(filmId);

      filmTitle.textContent = filmData.title;
      filmPoster.src = filmData.poster;
      productionDate.textContent = filmData.productionDate;
      filmInformation.textContent = filmData.information;
      mainActors.textContent = filmData.mainActors;

      filmInfoContainer.style.display = 'block';
    });
  });

  function getFilmData(filmId) {
    const filmsData = {
      '1': {
        title: 'The Hitmans Bodyguard',
        poster: './assets/images/The_Hitmans_Bodyguard.jpg',
        productionDate: '2017',
        information: "With his reputation in tatters after the painfully unsuccessful delivery of a distinguished Japanese client, the former triple-A protection agent, Michael Bryce, is now reduced to a mere second-class bodyguard for hire, two years after the disgraceful incident. Under those circumstances, Bryce would do anything to prove his worth, and, before long, he accepts an offer from Interpol to escort the international assassin, Darius Kincaid, from Manchester to the Hague. The task seems simple: Bryce needs to transport him from point A to point B; nevertheless, the trip to the Netherlands is long and hazardous, and Kincaid--as the only one with the guts and enough hard evidence to testify against a tyrannical Belarusian dictator--is an obvious target. Undoubtedly, it's a tough job, as the mismatched duo will have to put aside their grudges, and race against the clock in a non-stop concerto for bullets. Can the hitman's bodyguard carry through the most important mission in his career?",
        mainActors: 'Ryan Reynolds, Samuel L. Jackson, Gary Oldman, Elodie Yung'
      },
      '2': {
        title: '1+1',
        poster: 'assets/images/1+1.jpg',
        productionDate: '2011',
        information: 'In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is interviewing candidates for the position of his carer, with his red-haired secretary Magalie. Out of the blue, Driss cuts the line of candidates and brings a document from the Social Security and asks Phillipe to sign it to prove that he is seeking a job position so he can receive his unemployment benefit. Philippe challenges Driss, offering him a trial period of one month to gain experience helping him. Then Driss can decide whether he would like to stay with him or not. Driss accepts the challenge and moves to the mansion, changing the boring life of Phillipe and his employees.',
        mainActors: 'François Cluzet, Omar Sy'
      },
      '3': {
        title: 'Who am I',
        poster: 'assets/images/Who_am_I.jpg',
        productionDate: '2014',
        information: "Benjamin (Tom Schilling) is invisible, a nobody. This changes abruptly when he meets charismatic Max (Elyas M'Barek). Although they couldn't seem more different from the outside, they share an interest: hacking. With Max's friends, impulsive Stephan (Wotan Wilke Mohring) and paranoid Paul (Antoine Monot), they form the subjective hacker collective CLAY (CLOWNS LAUGHING @ YOU). CLAY provokes with fun campaigns and speaks for a whole generation. For the first time in his life, Benjamin is part of something and even attractive Marie (Hannah Herzsprung) notices him. But fun turns into deadly danger when CLAY appears on the BKA's (Bundeskriminalamt, Federal Criminal Police Office) as well as Europol's most wanted list. Hunted by Cybercrime investigator Hanne Lindberg (Trine Dyrholm), Benjamin is no longer a nobody, but instead one of the world's most-wanted hackers.",
        mainActors: "Tom Schilling, Elyas M'Barek, Hannah Herzsprung, Wotan Wilke Möhring, Antoine Monot Jr., Trine Dyrholm"
      }
    };

    return filmsData[filmId];
  }
});
