# In-Document Analytics Viewer

## Release Info

### Version 1.0.1

#### 9/25/2018
Store the sign-in to Google json file in the userData directory.

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

### Installing


## Versioning


## Authors



## License



## Acknowledgments



