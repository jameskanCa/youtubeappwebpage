import * as React from 'react';
import MetricCalculation from '../../Operations/MetricCalculation';
import BarGraph from '../Graphs/BarGraph';
import Panel from '../CustomComponents/Panel';
import TitleComponent from '../CustomComponents/TitleComponent';

export default class CategorySection extends React.Component {
	prepareCategoryGraph() {
		// For now providing date range of ALL.
		let dataArray;
		let data = MetricCalculation.formatSessionDate(this.props.sessions);
		return data.map((dailyData) => {
			dataArray = dailyData.categoryData;
			return {
				Date: dailyData.date,
				'Film & Animation': dataArray[1],
				'Film & AnimationColor': 'hsl(218, 70%, 50%)',
				'Autos & Vehicles': dataArray[2],
				'Autos & VehiclesColor': 'hsl(329, 70%, 50%)',
				Music: dataArray[10],
				MusicColor: 'hsl(2, 70%, 50%)',
				'Pets & Animals': dataArray[15],
				'Pets & AnimalsColor': 'hsl(64, 70%, 50%)',
				Sports: dataArray[17],
				SportsColor: 'hsl(148, 70%, 50%)',
				'Short Movies': dataArray[18],
				'Short MoviesColor': 'hsl(167, 70%, 50%)',
				'Travel & Events': dataArray[19],
				'Travel & EventsColor': 'hsl(140, 70%, 50%)',
				Gaming: dataArray[20],
				GamingColor: 'hsl(110, 70%, 50%)',
				Videoblogging: dataArray[21],
				VideobloggingColor: 'hsl(110, 70%, 50%)',
				'People & Blogs': dataArray[22],
				'People & BlogsColor': 'hsl(100, 70%, 50%)',
				Comedy: dataArray[23],
				ComedyColor: 'hsl(110, 70%, 50%)',
				Entertainment: dataArray[24],
				EntertainmentColor: 'hsl(90, 70%, 50%)',
				'News & Politics': dataArray[25],
				'News & PoliticsColor': 'hsl(80, 70%, 50%)',
				'Howto & Styles': dataArray[26],
				'Howto & StylesColor': 'hsl(70, 70%, 50%)',
				Education: dataArray[27],
				EducationColor: 'hsl(60, 70%, 50%)',
				'Science & Technology': dataArray[28],
				'Science & TechnologyColor': 'hsl(50, 70%, 50%)',
				'Nonprofits & Activism': dataArray[29],
				'Nonprofits & ActivismColor': 'hsl(40, 70%, 50%)',
				Movies: dataArray[30],
				MoviesColor: 'hsl(110, 70%, 50%)',
				'Anime / Animation': dataArray[31],
				'Anime / AnimationColor': 'hsl(30, 70%, 50%)',
				'Action / Adventure': dataArray[32],
				'Action / AdventureColor': 'hsl(20, 70%, 50%)',
				Classics: dataArray[33],
				ClassicsColor: 'hsl(170, 70%, 50%)',
				Comedy: dataArray[34],
				ComedyColor: 'hsl(110, 70%, 50%)',
				Documentary: dataArray[35],
				DocumentaryColor: 'hsl(180, 70%, 50%)',
				Drama: dataArray[36],
				DramaColor: 'hsl(190, 70%, 50%)',
				Family: dataArray[37],
				FamilyColor: 'hsl(200, 70%, 50%)',
				Foreign: dataArray[38],
				ForeignColor: 'hsl(240, 70%, 50%)',
				Horror: dataArray[39],
				HorrorColor: 'hsl(260, 70%, 50%)',
				'Sci - Fi / Fantasy': dataArray[40],
				'Sci - Fi / FantasyColor': 'hsl(280, 70%, 50%)',
				Thriller: dataArray[41],
				ThrillerColor: 'hsl(300, 70%, 50%)',
				Shorts: dataArray[42],
				ShortsColor: 'hsl(310, 70%, 50%)',
				Shows: dataArray[43],
				ShowsColor: 'hsl(65, 70%, 50%)',
				Trailers: dataArray[44],
				TrailersColor: 'hsl(5, 70%, 50%)',
				Unknown: dataArray[45],
				UnknownColor: 'hsl(95, 70%, 50%)'
			};
		});
	}

	render() {
		return (
			<Panel>
				{this.prepareCategoryGraph() ? (
					<div style={{ minWidth: 1300, height: 500, margin: 50 }}>
					<TitleComponent title={"Video Categories Watched Per Day"}></TitleComponent>
						<BarGraph
							data={this.prepareCategoryGraph()}
							keys={[
								'Autos & Vehicles',
								'Film & Animation',
								'Music',
								'Pets & Animals',
								'Sports',
								'Short Movies',
								'Travel & Events',
								'Gaming',
								'Videoblogging',
								'People & Blogs',
								'Comedy',
								'Entertainment',
								'News & Politics',
								'Howto & Style',
								'Education',
								'Science & Technology',
								'Nonprofits & Activism',
								'Movies',
								'Anime/Animation',
								'Action/Adventure',
								'Classics',
								'Comedy',
								'Documentary',
								'Drama',
								'Family',
								'Foreign',
								'Horror',
								'Sci-Fi/Fantasy',
								'Thriller',
								'Shorts',
								'Shows',
								'Trailers'
							]}
						/>
					</div>
				) : null}
			</Panel>
		);
	}
}
