// TODO Add a couple lines about each project
const data = [
  {
    title: 'Energy Emissions Dashboard',
    subtitle: 'Bellevue College Capstone',
    image: '/images/projects/WattTimePoster.png',
    date: '2020-06-30',
    desc:
      'Built for Bellevue College Capstone. '
      + 'Energy Emissions Dashboard scraped the web for published emissions '
      + 'data from balancing authorities around the world, cleaned and '
      + 'formatted the data, and then rendered charts and graphs for easy viewing.',
  },
  {
    title: 'Smart Doorbell',
    subtitle: 'A smart doorbell to detect people and objects in real time.',
    image: '/images/projects/ringItemDetector.jpg',
    date: '2019-06-05',
    desc:
      'Deconstructed a Ring Doorbell and used the API to send videos directly '
      + 'to the AWS SageMaker Object Detection algorithm and Rekognition, then  '
      + 'used AWS SNS to send a text message to the resident.',
  },
  {
    title: 'Loocator',
    subtitle: 'A simple bathroom locator.',
    // link: 'http://www.loocator.com',
    image: '/images/projects/loocator.png',
    date: '2020-04-19',
    desc:
      'Built for a hackathon, "UWB Hacks the Cloud," Loocator is a web app where users '
      + 'can view bathrooms near their current location and see different amenities, '
      + 'such as whether or not it is ADA Accessible, or if there is a door code.',
  },
  {
    title: 'Handwriting Reader',
    subtitle: 'An artificial neural network to classify handwritten digits.',
    image: '/images/projects/ANNhandwriting.png',
    date: '2019-09-23',
    desc:
      'Created an artificial neural network algorithm to classify handwritten digits 0-9. '
      + 'The algorithm was ~90% accurate on the MNIST data set.',
  },
];

export default data;
