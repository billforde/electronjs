# In-Document Analytics Viewer

## Release Info

### Version 1.0.1

#### 9/18/2018
The new updates are:
•	The version of 1.0.1 is just created.
•	Can now load a valid HTML active report onto the tab container.
•	A README file is just created, with all the progresses mentioned in the release notes.

### Version 1.0.0

#### 9/10/2018
Updates are:
	Allow multiple selections when loading files.
	Can now open a PDF file from the viewer.
	Allow only idfViewer file types in the file selection dialog. Currently they are adf, idf and pdf extensions.
	When loading a file into the tabs container, it is not checked by default.

#### 8/28/2018
Before the demo, the 3 following problems have been fixed, they are requested by Maria Volant:
1.	When saving changes, I am being prompted to create file. We should not be prompted to save the file. If the filename used exists, then I would expect a prompt about the existing file
2.	When I am opening a .adf file from my local drive, if the IDA Viewer is already open, I wouldn’t expect a new instance to open up, as this could result in too many open windows:
3.	When I open and then close an adf file, the file tooltip that comes up as I reach for the X button remains open:

#### 8/2/2018
I already return the codes to add support HOLD FORMAT ADF to the reporting server.

We also need to add the followed line for adding to the mime.wfs
<ADDTYPE>                 .adf          application/vnd.ibi-id.analytics  binary  yes       N/A       yes           .adf                     binary


#### 7/16/2018
I improve the gmail feature which now get the from name and address from the credential information from google when you sign in.
The e-mail still prompt you for the from, and I plan to implement a configuration screen so that you can only enter the from address once.

I will be working on merging selected reports. A checkbox has been added to each tab to select the report. William will be working on the api for adding support for merging multiple reports.

#### 6/26/2018
-	The google drive icon usage requires you to have a google account as gmail.
-	Email and Gmail icons now work (from today’s executable).

#### 6/19/2018
The email icon is currently implemented only to work in ibi because it only uses the ibi smtp server. This will be a configurable option in the future.
My next plan is to implement the Gmail and if possible Exchange.

#### 6/12/2018
In order to use this app, run the setup program like you would do when installing Acrobat Reader. In addition to the functionality of the icons (description of the tooltip) in the ribbon, this app is able to:
-	Have new icons.
-	Associate the file extensions (adf/idf) during install. It means that if you double click a file with extension “adf’ or “idf”, that file will be opened with the app without prompting you to open it with any application.
-	The google drive icon usage requires you to have a google account as gmail.
These are the features that I will implement in the near future:
	Email icon currently doesn’t work, since mailto does not allow attachments, because of security issues.  This will  need more research.  The work around solution maybe to share the link from Google or directly talk to the email server.
	Find out how to make the app reuse the same opened application window.
	Drag a xxx.adf file into the app.



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

