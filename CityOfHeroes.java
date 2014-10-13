import java.io.File;
import java.io.IOException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.jsoup.nodes.Element;
import java.lang.String;

// Download jsoup library here: http://jsoup.org/packages/jsoup-1.7.3.jar
public class CityOfHeroes {

	public static void main(String[] args) throws IOException {
		String location = "/homes/shivan/git/cityofheroes/data/tmp/in";
		String loc = location;
		String where = "";
		String when = "";
		Integer intg = new Integer(66);
		int count = 0;
		int remainder = 15;
		for (int z = 66; z < 1000 ; z++){
			intg = z;
			loc = location + intg.toString() + ".html";
			File file = new File(loc);
			Document doc = Jsoup.parse(file, "US-ASCII");
			if(doc.getElementById("page-title").text().equals("Access denied") || doc.getElementById("page-title").text().equals("Page not found")){
				continue;
			}
			System.out.print(z);
			System.out.print("|");
			System.out.print( doc.getElementById("page-title").text());
			System.out.print("|");
			System.out.print(doc.select("img.imagecache-volunteer_op_profile_default").attr("src"));
			System.out.print("|");
			try{
				when = doc.getElementById("when").text();
				where = doc.getElementById("where").text();
				System.out.print(when.substring(8, when.length()));
				System.out.print("|");
				System.out.print(where.substring(6, where.length() - 6));
				System.out.print("|");
			}
			catch(Throwable t){
				System.out.print("||");
			}
			System.out.print(doc.select("div.wpg-content-single-description").text());
			System.out.print("|");
			Elements volunteers = doc.select("div.item-list > ul.list-no-style > li");

			count = volunteers.size();
			for (Element volunteer : volunteers){
				if(volunteer.text().equals("Good for Kids")){
					count--;
				}
				if(volunteer.text().equals("Team Event")){
					count--;
				}
			}
			remainder = 15 - count;

			for (Element volunteer : volunteers){
				if(volunteer.text().equals("Good for Kids")){
				}
				else if(volunteer.text().equals("Team Event")){
				}
				else{
					System.out.print(volunteer.text());
					System.out.print("|");
				}
			}

			for (int y = 0; y < remainder; y++){
				System.out.print("|");
			}

			Elements interests = doc.select("div.item-list > ul.wpg-cat-list > li");
			remainder = 34-interests.size();
			for (Element interest : interests){
				System.out.print(interest.text());
				System.out.print("|");
			}
			for (int x = 0; x < remainder; x++){
				System.out.print("|");
			}
			
			System.out.println();
		}

	}

}
