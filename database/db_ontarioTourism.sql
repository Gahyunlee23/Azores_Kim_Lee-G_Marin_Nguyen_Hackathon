-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 11, 2020 at 06:19 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ontarioTourism`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_place`
--

CREATE TABLE `tbl_place` (
  `ID` int(11) NOT NULL,
  `place name` varchar(50) NOT NULL,
  `place description` text NOT NULL,
  `place image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_place`
--

INSERT INTO `tbl_place` (`ID`, `place name`, `place description`, `place image`) VALUES
(1, 'Haliburton Forest and Wildlife Reserve', 'Ontario\'s hidden outdoor recreation, education and entertainment gem. Haliburton Forest, is a unique, privately owned forest located on over 100,000 acres of rolling hardwood forests, beautiful lakes, meandering rivers and extensive wetlands in the Haliburton Highlands of central Ontario, 3 hours north of Toronto. An outdoor lover\'s paradise, Haliburton Forest, features wilderness adventure activities including the Wolf Centre, the Walk in the Clouds forest canopy tour, groomed snowmobile/atv trails, mountain biking, dog sledding, fishing, hiking, astronomy, wildlife observation, wolf howls, natural history presentations, guided experiences, wilderness camping and accommodations, and an array of educational programs.', 'CentralOn_2.jpg'),
(2, 'Splash', 'Make your splash this summer! Enjoy hours of fun on the waterfront with the new Splash On Water Park located on Centennial Beach in the heart of downtown Barrie!  Explore the terrain and obstacles of the water park for non stop fun for the whole family! The prime location of this awesome waterfront activity allows for a whole day of excitement for all ages to enjoy water recreation.', 'CentralOn_3.jpg'),
(3, 'Presqui’ile, brighton', 'Presqu\'ile is French for \"almost an island\". Presqu\'ile Park is a provincial park located on piece of land (shaped like a boomerang) that sticks out into Lake Ontario. The park also has one of the longest sand beaches in Ontario. Whether you want to visit for the day, camp overnight, or rent a cottage, the park will be a highlight of your trip. There\'s a lot to do at Presqu\'ile Park.\r\n', 'CentralOn_4.jpg'),
(4, 'Rideau Canal', 'The Rideau Canal Skateway is open between Waverley and Bank, including Patterson Creek and between Bronson and Library, including the Dows Lake Loop. Due to last night’s precipitation, the ice surface could not be flooded. Sweeping operations are in progress therefore, please use caution as maintenance equipment will be present on the ice.', 'EastOn_2.jpg'),
(5, 'Thousand Islands', 'The Thousand Islands are a group of more than 1,800 islands in the St. Lawrence River, straddling the border of the U.S. and Canada. A fashionable retreat for the elite in the late 19th century, today the area is a hub for outdoor activities. It’s home to elaborate island mansions such as the German-style Boldt Castle on Heart Island, and Singer Castle on Dark Island, with its Gothic windows and secret passageways.', 'EastOn_3.jpg'),
(6, 'Springer Market Square, Kingston', 'Downtown Kingston’s central hub, Springer Market Square has been a place for vendors to sell their wares for more than 200 years. The open space at King Street and Brock Street serves as an outdoor movie theatre on summer evenings and a skating rink in the winter with Kingston City Hall as a backdrop. Brick roads add to the period feel. Guillermo del Toro’s crew dressed up the square as turn-of-the-20th-century Buffalo in Crimson Peak (2015), and it also stood in for a Russian city in a 2013 episode of The CW’s Nikita and 1890s New Orleans in Vendetta (1999).', 'EastOn_4.jpg'),
(7, 'Agawa Canyon Tour Train', 'Agawa Canyon Tour Train and experience a one day wilderness rail excursions to Agawa Canyon, operates from early June to mid October. Please contact us for information on exact dates. Algoma is ablaze with colour during autumn and for decades the Canyon Tour has been a favourite way for fall ‘leaf peepers’ to experience some of the most spectacular fall colour in North America. Though peak colour varies each season, typically the last two weeks of September and the first week of October can offer the best colour and should be considered when planning your excursion\r\n', 'NorthOn_2.jpg'),
(8, 'Slate Islands', 'Slate Islands Provincial Park is our brilliant gem on the waters of Lake Superior. Approximately 12 km (7.5 miles) south of Terrace Bay, on the Canadian North Shore of the Lake, Slate Islands Provincial Park is a 7 km-wide (0.6-miles) archipelago touched by a history of logging, mining, early Oneota and Iroquoian campsites, and a resilient herd of woodland caribou that migrated over by ice bridge most recently in 1907.', 'NorthOn_3.jpg'),
(9, 'Old Woman Bay', 'A long sandy beach populated with driftwood surrounds you with the true beauty of Algoma at Old Woman Bay. Looking towards the horizon, the face of the Old Woman can be seen within the 200-metre standing cliffs to the left. The bay horseshoes out to the main body of Superior to the north, leading you to Entrance Island. With the easy access, Old Woman Bay makes for a great spot year-round for picnics, sight-seeing, fishing, even a swim if you don’t mind the cold!', 'NorthOn_4.jpg'),
(10, 'Elora Skyrider Ziplin', 'The Elora Skyrider Zip Line lets explorers soar over the massive Elora Gorge from over 100ft above! The Elora Skyrider Zip Line is run by ONE AXE Pursuits which is about a 2 hour drive from Toronto, a 6 hour drive from Ottawa, a 4 hour drive from Kingston and less than 2 hours from London. They\'re open only on the weekends in June and September but for July and August they\'ll be open daily! ONE AXE Pursuits offers rides for $30 each and you can choose to go more than once if you like. \r\n', 'SouthWestOn_2.jpg'),
(11, 'Ancient Coral Reef', 'Corals are carnivorous marine organisms with stinging cells and tentacles. They are related to jellyfish and sea anemones. The term coral is also applied to their skeletons, which can be organic (soft) or composed of minerals (hard). In species with a stony exterior, the outer body wall secretes calcium carbonate (lime). The skeleton forms in intricate patterns as the coral animal grows. The skeleton persists after its organism dies. Corals live in colonies or are solitary, depending on the species.\r\n', 'SouthWestOn_3.jpg'),
(12, 'Inglis Falls', 'One of three waterfalls that surround the city of Owen Sound, Ontario, Canada, Inglis Falls is the largest and most impressive. It is also the most visited. Situated in the heart of the 200-hectare Inglis Falls Conservation Area, Inglis Falls is an 18-metre-high (59 ft) cascade, created by the Sydenham River meeting the edge of the Niagara Escarpment. Swimming is prohibited in the entire area but it is possible to hike down to the base of the waterfall. The Conservation Area includes 7.42 km of hiking and mountain bike trails.', 'SouthWestOn_4.jpg'),
(13, 'Bruce Peninsula National Park ', 'Dramatic cliffs rise from the turquoise waters of Georgian Bay. In large tracts of forest, black bears roam and rare reptiles find refuge in rocky areas and diverse wetlands. Ancient cedar trees spiral from the cliff edge; a multitude of orchids and ferns take root in a mosaic of habitats. And the night is brilliant with stars in this Dark Sky Preserve. ', 'SouthOn_2.jpg'),
(14, 'Blue Mountain', 'Blue Mountain is an alpine ski resort in Ontario, Canada, just northwest of Collingwood. It is situated on a section of the Niagara Escarpment about 1 km (0.6 mi.) from Nottawasaga Bay, and is a major destination for skiers from southern Ontario. The local area forms the newly incorporated town of The Blue Mountains, Ontario. On average, Blue Mountain sells more than 750,000 lift tickets per year, making it the third-busiest ski resort in Canada, after Whistler-Blackcomb in British Columbia and Mont Tremblant in Quebec.', 'SouthOn_3.jpg'),
(15, 'Canada’s Wonderland', 'Canada\'s Wonderland is a 134-hectare (330-acre) theme park located in Vaughan, Ontario, a suburb approximately 25 kilometres (16 mi) north of Downtown Toronto. Opened in 1981 by the Taft Broadcasting Company and The Great-West Life Assurance Company as the first major theme park in Canada, it remains the country\'s largest. The park, currently owned by Cedar Fair, has been the most visited seasonal amusement park in North America for several consecutive years.', 'SouthOn_4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_region`
--

CREATE TABLE `tbl_region` (
  `ID` int(11) NOT NULL,
  `region name` varchar(50) NOT NULL,
  `region description` text NOT NULL,
  `image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_region`
--

INSERT INTO `tbl_region` (`ID`, `region name`, `region description`, `image`) VALUES
(1, 'Central Ontario', 'Create awesome memories with family and friends this winter in BruceGreySimcoe! Experience fresh, crisp winter days playing in the snow on the slopes, cross-country skiing or snowshoeing the trails, gliding on a smooth skate trail, snowmobiling or dropping a line through the ice. Discover our stories by taking a guided tour — snowshoe under moonlight, cross-country ski to the edge of the escarpment, explore a frosty cave, ice fish in a cozy hut and fat bike a groomed trail.  If indoors is more your thing, savour local cuisine at eclectic dining establishments, plan a shopping trip, browse an art gallery or roam through a museum. Top off a day of \"time well spent\" at one of our spas to unwind and rejuvenate.  Take a winter break this winter and come visit the communities of BruceGreySimcoe.', 'CentralOn_1.jpg'),
(2, 'Eastern Ontario', 'A relaxed urban vibe draped in natural splendour, Canada’s capital and Ontario’s second largest city is a showcase of national sites, museums, festivals and culinary experiences where visitors can experience the best of our country in one place. Ottawa\'s charming countryside offers vast greenery and an abundance of quaint shops.', 'EastOn_1.jpg'),
(3, 'Nothern Ontario', 'We invite you to a BIG playground of pristine lakes and rivers, towering old-growth pine forests, and brilliant blue skies—a land where you’ll discover as many heart-stirring myths and legends as you will things to do.', 'NorthOn_1.jpg'),
(4, 'Southwestern Ontario', 'We love seeing the look that spreads across visitors’ faces when they learn that the southern tip of our region dips onto the same latitudinal plain as northern California. The expression of disbelief quickly turns into a satisfied grin when they realize they’ve discovered a getaway destination that offers world-class freshwater beaches and water sports, some of the continent’s best birding, a rapidly evolving wine and culinary scene and the friendliest communities on the planet.', 'SouthWestOn_1.jpg'),
(5, 'Southern Ontario ', 'Laced together by the sparkling St. Lawrence River, Rideau Canal, Bay of Quinte and Lake Ontario, this region serves up all the ingredients for a perfect getaway. On its shores you’ll find fascinating history, quaint villages, inspiring art, live theatre and gastronomic delights. On its waters, enjoy world class sailing and scuba diving, pristine beaches and leisurely cruises', 'SouthOn_1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reg_place`
--

CREATE TABLE `tbl_reg_place` (
  `ID` int(11) NOT NULL,
  `region_id` int(11) NOT NULL,
  `place_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_reg_place`
--

INSERT INTO `tbl_reg_place` (`ID`, `region_id`, `place_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 4),
(5, 2, 5),
(6, 2, 6),
(7, 3, 7),
(8, 3, 8),
(9, 3, 9),
(10, 4, 10),
(11, 4, 11),
(12, 4, 12),
(13, 5, 13),
(14, 5, 14),
(15, 5, 15);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_signUp`
--

CREATE TABLE `tbl_signUp` (
  `user_id` int(11) NOT NULL,
  `user_fname` varchar(50) NOT NULL,
  `user_lname` varchar(30) NOT NULL,
  `user_email` varchar(70) NOT NULL,
  `user_country` varchar(50) NOT NULL,
  `user_subscribe_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_last_update` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_signUp`
--

INSERT INTO `tbl_signUp` (`user_id`, `user_fname`, `user_lname`, `user_email`, `user_country`, `user_subscribe_date`, `user_last_update`) VALUES
(1, 'Dana ', 'Marin', 'dana.mgasdfgh@gmail.com', 'Mexico', '2020-02-10 20:03:15', '2020-02-10 21:22:38'),
(2, 'Gahyun', 'Lee', 'stellalee1119@gmail.com', 'Korea, Republic of', '2020-02-10 20:12:46', '2020-02-11 01:08:37'),
(5, 'jennifer', 'jung', 'feelis1119@naver.com', 'korea, republic of', '2020-02-11 03:50:09', '2020-02-11 00:31:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_place`
--
ALTER TABLE `tbl_place`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_region`
--
ALTER TABLE `tbl_region`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_reg_place`
--
ALTER TABLE `tbl_reg_place`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_signUp`
--
ALTER TABLE `tbl_signUp`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_place`
--
ALTER TABLE `tbl_place`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_region`
--
ALTER TABLE `tbl_region`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_reg_place`
--
ALTER TABLE `tbl_reg_place`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_signUp`
--
ALTER TABLE `tbl_signUp`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
