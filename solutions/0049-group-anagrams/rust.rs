impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        use std::collections::HashMap;

        let mut groups: HashMap<Vec<u8>, Vec<String>> = HashMap::new();
        for word in strs {
            let mut signature = word.as_bytes().to_vec();
            signature.sort_unstable();
            groups.entry(signature).or_default().push(word);
        }
        groups.into_values().collect()
    }
}
