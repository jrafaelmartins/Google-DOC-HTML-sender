# Google-DOC-HTML-sender

User Guide

1. Installation
Open the Google spreadsheet, select Tools->scripts->script editor.
Copy and paste the script from below
Click save.
Refresh the spreadsheet page. You will be asked for permission to run the script.
You should see a new item "HTML sender" in the menu bar. 

2. Usage
The script creates a sheet in your spreadsheet named "script_config" for configuration.
Get your Google spreadsheet authentication token from http://appscripts.appspot.com/getAuthToken .
Copy and paste the token under "Auth token" in the configuration sheet.
The authentication token expires after around 2 weeks. You need to repeat this step when that happens.
Fill in the recipient email, subject, body text and sheet name and gid. Sheet name is the name of the pdf file to be exported. Gid can be found at the end of the URL when you are viewing the spreadsheet. e.g. https://spreadsheets.google.com/ccc?key=0Ahb_SDB&hl=en_GB#gid=1 shows gid is 1.

Now you can select "HTML sender" -> "Send as PDF" from the menu to send

3. Advanced Features
You can fill in multiple rows in script_config and an email will be generated for each row.
You can specify additional sheet GIDs in the columns to the right. An attachment will be generated for each sheet specified.

4. Limitations
There is a size limit of 1 Mb for each email. 
