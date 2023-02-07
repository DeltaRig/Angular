// authors.component.ts
@Component({
    selector: 'authors'
    template: `
        <h2>{{ countAuthors }}{{ title }}<h2>
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ul>
    `
})

export class AuthorsComponent {
    title = "Authors";
    countAuthors;
    authors;

    constructor(service: AuthorsService) {
        this.authors = service.getAuthors();
        this.countAuthors = service.getCountAuthors();
    }
}

// authors.service.ts
export class AuthorsService {
    authors = ["author1", "author2", "author2"];

    getAuthors(){
        return this.authors;
    }

    getCountAuthors(){
        return this.authors.length;
    }
}

// register in app.module.ts
// components in declarations
// services in providers