# In-Document Analytics Viewer

## Release Info

### Version 1.0.1

#### 9/18/2018
The new updates are:
•	The version of 1.0.1 is just created.
•	Can now load HTML files into the tab container.
•	A README file is just created, with all the progresses mentioned in the release notes.

### Version 1.0.0

#### 9/10/2018
Updates are:
	Allow multiple selections when loading files.
	Can now open a PDF file from the viewer.
	Allow only idfViewer file types in the file selection dialog. Currently they are adf, idf and pdf extensions.
	When loading a file into the tabs container, it is not checked by default.

#### 8/28/2018
Before the demo, the 3 following problems have been fixed:
1.	When saving changes, the user is being prompted to create file. They should not be prompted to save the file. If the filename being used already exists, then they would expect a prompt about overwriting the existing file.
2.	When the user opens an .adf file from their local drive, if the IDA Viewer is already opened, they wouldn’t expect a new instance to open up, as this could result in too many opened windows.
3.	When the user opens and then close an adf file, the file tooltip comes up and remains opened even after closing the window.

#### 8/2/2018
The code has been returned to add support HOLD FORMAT ADF to the reporting server.

Adding the followed line to the mime.wfs so that the client support the new file type.
<ADDTYPE>                 .adf          application/vnd.ibi-id.analytics  binary  yes       N/A       yes           .adf                     binary


#### 7/16/2018
Use the GMAIL APIs to get the FROM name and address when emailing reports thru gmail.

#### 6/26/2018
Add support for Google sign in.
Add support to Email and Gmail.

#### 6/19/2018
Add support to email thru SMTP.

#### 6/12/2018
Initial return of the setup program for installing the viewer.

For setup and installation:
-	Custom icon for identifying the new extensions.
-	Associate the file extensions (adf/idf) during install. Files with extension “adf’ or “idf”  will be opened with the viewer without prompting.

Add support for Google Drive to allow saving and loading ADF files:
-	The user is required to have a Gmail account.

## To Do
Add support to merge multiple reports.
Add support to drag a *adf file into the app.
Add support to configurate email option.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

