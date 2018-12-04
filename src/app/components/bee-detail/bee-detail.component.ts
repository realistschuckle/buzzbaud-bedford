import {
  Component, OnInit
} from '@angular/core';
import { Bee } from '../../models/bee';

@Component({
  selector: 'app-bee-detail',
  templateUrl: './bee-detail.component.html',
  styleUrls: ['./bee-detail.component.scss']
})
export class BeeDetailComponent implements OnInit {
  public bee: Bee;

  public ngOnInit(): void {
    this.bee = {
      name: 'Sweat Bee',
      description: 'Ew. Gross.',
      genus: 'Perspirus',
      species: 'Smellius',
      deadly: true,
      alias: 'The Stinky Green Machine',
      communal: true,
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Iridescent.green.sweat.bee1.jpg',
      endangered: true,
      id: '1'
    };
  }
}
