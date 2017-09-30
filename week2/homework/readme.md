# Code Plan

This program is a US Customary System to Metric System converter, in particular inches, feet, yards, and miles to centimeters, meters, and kilometers.

## How It Works

My plan was simple, instead of using numerous conditional statements, I decided to convert every US Customary unit to inches and then simply convert that to the desired Metric System unit.

## Step-By-Step

<b>HTML</b>
<ol>
    <li>create a text-box for the user to input the number they want to convert from the US Customary System</li>
    <li>create a drop-down menu for the user to select both the US Customary System unit they want to convert from and the Metric System Unit they want to convert to</li>
    <li>create a button for the user to click to submit</li>
    <li>create a "div" for the eventual output</li>
</ol>

<b>JavaScript</b>
<ol>
    <li>create a convert function</li>
    <li>use "addEventListener" to grab the submit button</li>
    <li>in the convert function, use "getElementById" to grab all the information required:
        <ul>
            <li>input</li>
            <li>US Customary System unit</li>
            <li>Metric System unit</li>
            <li>output</li>
        </ul>
    </li>
    <li>create a conversion unit to be used later</li>
    <li>using a series of "if" statements, convert the US Customary System units to inches</li>
    <li>again, using a series of "if" statements, convert the now converted US Customary System unit to the Metric System units</li>
    <li>use "innerHTML" to output the answer onto the screen</li>
</ol>