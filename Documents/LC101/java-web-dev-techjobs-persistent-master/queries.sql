## Part 1: Test it with SQL
id int
employer varchar
name varchar
skills varchar
## Part 2: Test it with SQL

SELECT
name
FROM techjobs.employer
WHERE location = "St. Louis City";

## Part 3: Test it with SQL

DROP TABLE
techjob.jobs;

## Part 4: Test it with SQL
SELECT
skill.name,
skill.description
FROM
techjobs.skill as skill
LEFT JOIN
techjobs.job_skills as js
ON
skill.id = js.skills_id
WHERE jobs_id IS NOT NULL
ORDER BY name asc