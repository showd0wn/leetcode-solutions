SELECT
    World.name,
    population,
    area
FROM
    World
WHERE
    area >= 3000000
    OR population >= 25000000;

-- 方法二
SELECT
    World.name,
    population,
    area
FROM
    World
WHERE
    area >= 3000000
UNION
SELECT
    World.name,
    population,
    area
FROM
    World
WHERE
    population >= 25000000;