#include <iostream>
#include <string>

using namespace std;

void showAddress(const string& str) {
    cout << "Address of each character in the string:\n";
    for (int i = 0; i < str.length(); i++) {
        cout << str[i] << ": " << (void*) &str[i] << endl;
    }
    cout << endl;
}

void concatStrings(const string& str1, const string& str2){
    cout << "Performing Concatenation: \n";
    cout << str1 << " "<< str2 << "=" << str1 + str2<< endl;
}

void compareStrings(const string& str1, const string& str2){
    cout << "Comparing using character's ASCII value: \n";
    if(str1 == str2){
        cout<<"Both strings are equal.";
    } else if(str1 > str2) {
        cout<<"First string is greater than second string.";
    } else {
        cout<<"Second string is greater than first string.";
    }
}

void calculateLength(const string& str1){
    cout<< "Calulating the length of string: \n";
    int count,i;
    count = i = 0;
    while(str1[i]) {
        count++;
        i++;
    }
    cout<< "Length of the string is: "<< count;
}

void convertToUpper(string& str1) {
    cout << "Converting to uppercase:\n";
    int i = 0;
    while (str1[i]) {
        if (str1[i] >= 'a' && str1[i] <= 'z') {
            str1[i] -= 32;
        }
        i++;
    }
    cout << "Converted string: " << str1 << endl;
}

void reverseString(string& str1) {
    int i = 0;
    string str2 = str1;
    while (str1[i]) {
        str2[i] = str1[str1.length()-i - 1];
        i++;
    }
    cout << "Reversed string: " << str2 << endl;
}




int main() {
    cout << "String manipulation menu." << endl;
    cout << "1: Show address of each character in string." << endl;
    cout << "2: Concatenate two strings." << endl;
    cout << "3: Compare two strings." << endl;
    cout << "4: Calculate length of the string." << endl;
    cout << "5: Convert all lowercase characters to uppercase." << endl;
    cout << "6: Reverse the string." << endl;
    cout << "7: Insert a string in another string at a user-specified position." << endl;
    cout << "Enter your choice: ";
    
    string string1;
    int choice;
    cin >> choice;

    switch (choice) {
        case 1: {
            string string1;
            cout << "Enter a string: ";
            cin>>string1;
            showAddress(string1);
            break;
        }
        case 2: {
            string string1, string2;
            cout << "Enter first string: ";
            cin>>string1;
            cout << "\nEnter second string: ";
            cin>>string2;
            concatStrings(string1, string2);
            break;
        }
        
        case 3: {
            string string1, string2;
            cout<< "Enter first string: ";
            cin>>string1;
            cout << "\nEnter second string: ";
            cin>>string2;
            compareStrings(string1, string2);
            break;
        }
        
        case 4: {
            string string1;
            cout<< "Enter a string: ";
            cin>>string1;
            calculateLength(string1);
            break;
        }
        
        case 5: {
            string string1;
            cout<< "Enter a string: ";
            cin>>string1;
            convertToUpper(string1);
            break;
        }
        
        case 6: {
            string string1;
            cout<< "Enter a string: ";
            cin>>string1;
            reverseString(string1);
            break;
        }
        
        case 7: {
            string string1, string2;
            int position;
            cout<< "Enter a string: ";
            cin>>string1;
            cout<< "Enter the string to insert: ";
            cin>>string1;
            cout << "Enter the position to insert at: ";
            cin >> position;
            insertString(string1, string2, position);
            break;
        }
    }

    return 0;
}
