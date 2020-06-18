import java.util.regex.Pattern;
import java.util.regex.Matcher;

class Solution {
    public boolean isPowerOfThree(int n) {
        if (n == 3) {
            return true;
        }
        String str = "" + Integer.toString(n, 3);
        Pattern pattern = Pattern.compile("^10*$");
        Matcher matcher = pattern.matcher(str);
        return matcher.find();
    }
}