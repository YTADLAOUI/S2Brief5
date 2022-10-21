/* 
    This file contains an array of objects as tasks, to be loaded in the execution.
*/
var tasks = [
    {
        'title'         :   'Keep all the updated requirements in one place',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.`,
    },
    {
        'title'         :   'Provide examples, credentials, etc',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `If the expectation is to process or generate some file — attach an example of such a file. If the goal is to integrate what is being developed with some service, ensure your devs have access to this service and its documentation. This list could go on and on — the bottom line is — if there is something that our developer might make use of, try to foresee it and provide them with (access to) it.`,
    },
   
    {
        'title'         :   'Spoil your developers with details',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'To Do',
        'date'          :   '2022-10-08',
        'description'   :   `It is always safer to assume less rather than more domain knowledge in the dev team. Therefore following the KISS principle and augmenting each description or acceptance criteria list with contextual/domain knowledge and details that might become relevant is highly recommended.`,
    },
    {
        'title'         :   'Describe edge cases and provide constraints',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `Hardly any developer likes constraints, but if there are some, let them be communicated early. Do we need to support some specific browsers? Does this script need to run below a specific amount of time? Is it crucial for this endpoint to respond in no more than n milliseconds? If there are some such concerns, make sure they are included in your descriptions. Also describing any edge cases might be beneficial. Maybe we have some query limit on a given service? If you have such knowledge it is always beneficial for your devs to know about it upfront.`,
    },
    {
        'title'         :   'Provide a copy',
        'type'          :   'Feature',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `If there is a long message to be displayed, just provide a copy for it somewhere in the description. Do not place it on mockups as it is always slower and more error-prone to re-type it than to copy-paste it.`,
    },
    
    {
        'title'         :   'Describe steps to reproduce an issue',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `including as many details as possible.`,
    },
    
    {
        'title'         :   'Provide a link to an exception and/or a stack trace',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'In Progress',
        'date'          :   '2022-10-08',
        'description'   :   `as investigating those is usually the first step to take in resolving the problem.`,
    },
    {
        'title'         :   'Provide access to logs',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `as they can be helpful in reproducing the steps that caused the problem in the first place.`,
    },
    {
        'title'         :   'Provide access to the affected server or database dump',
        'type'          :   'Bug',
        'priority'      :   'High',
        'status'        :   'Done',
        'date'          :   '2022-10-08',
        'description'   :   `If it is possible and when it does not violate security policies, it is usually helpful for the developer to access the original data that might have played a role in the problem.`,
    },
    
];