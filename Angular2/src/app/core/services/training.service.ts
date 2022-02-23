import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../models/course.model';
import {Observable, of} from 'rxjs';

@Injectable()
export class TrainingService {
  constructor(
    private http: HttpClient,
  ) { }

  getCourse(id: number): Observable<Course>
  {
    return of(TrainingService.getSampleCourse());
  }

  private static getSampleCourse(): Course {
    return {
      "id": 1,
      "version": 2,
      "date": "18/03/2022",
      "name": "Secure Development",
      "languages": [
        "python",
        "java",
        "js",
        "net"
      ],
      "content": [
        {
          "slide": "skf/markdown/learning_platform/slides/1.md"
        }
      ],
      "topics": [
        {
          "id": 2,
          "name": "Session management",
          "content": [
            {
              "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
          ],
          "categories": [
            {
              "id": 3,
              "name": "Session Hijacking",
              "content": [
                {
                  "slide": "skf/markdown/learning_platform/secure_code/slides/1.md"
                },
                {
                  "questionnaire": "skf/markdown/learning_platform/secure_code/questionnaire/1.md"
                },
                {
                  "lab": {
                    "hint": "This is a super simple tip & hint!",
                    "writeup": "https://owasp-skf.gitbook.io/asvs-write-ups/server-side-template-injection-ssti",
                    "images": [
                      {
                        "python": "blabla1337/owasp-skf-lab-py"
                      },
                      {
                        "java": "blabla1337/owasp-skf-lab-java"
                      },
                      {
                        "js": "blabla1337/owasp-skf-lab-js"
                      },
                      {
                        "net": "blabla1337/owasp-skf-lab-net"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "id": 4,
              "name": "HTTP Only flag",
              "content": [
                {
                  "slide": "skf/markdown/learning_platform/secure_code/slides/2.md"
                },
                {
                  "questionnaire": "skf/markdown/learning_platform/secure_code/questionnaire/2.md"
                }
              ]
            },
            {
              "id": 5,
              "name": "Session riding",
              "content": [
                {
                  "slide": "skf/markdown/learning_platform/secure_code/slides/3.md"
                },
                {
                  "questionnaire": "skf/markdown/learning_platform/secure_code/questionnaire/3.md"
                }
              ]
            }
          ]
        },
        {
          "id": 6,
          "name": "Validation, Sanitization and Encoding",
          "content": [
            {
              "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
          ],
          "categories": [
            {
              "id": 7,
              "name": "SQL injection",
              "content": [
                {
                  "slide": "skf/markdown/learning_platform/secure_code/slides/4.md"
                },
                {
                  "questionnaire": "skf/markdown/learning_platform/secure_code/questionnaire/4.md"
                }
              ]
            },
            {
              "id": 8,
              "name": "LDAP injection",
              "content": [
                {
                  "slide": "skf/markdown/learning_platform/secure_code/slides/5.md"
                },
                {
                  "questionnaire": "skf/markdown/learning_platform/secure_code/questionnaire/5.md"
                }
              ]
            },
            {
              "id": 9,
              "name": "Server Side Template injection",
              "content": [
                {
                  "slide": "skf/markdown/learning_platform/secure_code/slides/6.md"
                },
                {
                  "questionnaire": "skf/markdown/learning_platform/secure_code/questionnaire/6.md"
                }
              ]
            },
            {
              "id": 10,
              "name": "Server Side Template injection",
              "content": [
                {
                  "slide": "skf/markdown/learning_platform/secure_code/slides/7.md"
                },
                {
                  "questionnaire": "skf/markdown/learning_platform/secure_code/questionnaire/7.md"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
