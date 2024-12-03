const Samjson = 'https://raw.githubusercontent.com/Ksamuelkaj/json-data/refs/heads/main/myAdmissions.json';

fetch(Samjson)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        visualizeData(data);
        visualizePerDistrict(data);
        visualizeCoursetrend(data);
        visualizeCoursepopularity(data);
        

    })
    .catch(error => console.error('Error fetching data:', error));

    function visualizeData(data) {
        const allStudents = data.admissionData.pages.flatMap(page => page.students);

        const genderCounts = allStudents.reduce((counts, student) => {
          // I'm innitializing my count.
            counts[student.gender] = (counts[student.gender] || 0) + 1;
            return counts;
        }, {});
    
        const genders = Object.keys(genderCounts);
        const counts = Object.values(genderCounts);
    
        // Here I'm rendering the Chart to display for the data.
        const ctx = document.getElementById('admissionChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: genders,
                datasets: [{
                    label: 'Gender Distribution',
                    data: counts,
                    backgroundColor: ['hot pink', 'red'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }


    function visualizePerDistrict(data) {
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
        const districtCounts = allStudents.reduce((counts, student) => {
            counts[student.districtName] = (counts[student.districtName] || 0) + 1;
            return counts;
        }, {});
    
        const districtName = Object.keys(districtCounts);
        const counts = Object.values(districtCounts);
    
        // I can render my chart here now.
        const ctx = document.getElementById('districts').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: districtName,
                datasets: [{
                    label: 'Students Per District',
                    data: counts,
                    backgroundColor: ['pink', 'green', 'orange', 'blue', 'purple', 'amber'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }
    
    
    function visualizeCoursetrend(data) {
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
        const trendCounts = allStudents.reduce((counts, student) => {
            counts[student.year] = (counts[student.year] || 0) + 1;
            return counts;
        }, {});
    
        const year = Object.keys(trendCounts);
        const counts = Object.values(trendCounts);
    
        // My chart to show for the trend of the admission of students over the years.
        const ctx = document.getElementById('trending course').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: year,
                datasets: [{
                    label: 'Admission Trends Over Years',
                    data: counts,
                    backgroundColor: ['green', 'orange', 'pink', 'blue', 'purple'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }


    function visualizeCoursepopularity(data) {
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
    
        const popularityCounts = allStudents.reduce((counts, student) => {
            counts[student.course] = (counts[student.course] || 0) + 1;
            return counts;
        }, {});
    
        const course = Object.keys(popularityCounts);
        const counts = Object.values(popularityCounts);
    
        // My Chart for the course popularity.
        const ctx = document.getElementById('popular course').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: course,
                datasets: [{
                    label: 'Popular Course Over The Years',
                    data: counts,
                    backgroundColor: ['pink', 'blue', 'orange', 'purple', 'green'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }

    // Here I rest My case Sir... Kajokare Samuel/2401200787.

   

    