import { CommonModule } from "@angular/common";
import { SexoPipe } from "../../pipes/sexo.pipe";

styleUrls: ['./home.component.scss']
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SexoPipe
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // ...
}

function Component(arg0: { selector: string; standalone: boolean; imports: (typeof CommonModule | typeof SexoPipe)[]; templateUrl: string; styleUrls: string[]; }): (target: typeof HomeComponent) => void | typeof HomeComponent {
  throw new Error("Function not implemented.");
}
