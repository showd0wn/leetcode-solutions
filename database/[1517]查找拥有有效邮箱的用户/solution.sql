SELECT
    user_id,
    Users.name,
    mail
FROM
    Users
WHERE
    mail REGEXP '^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode\\.com$';